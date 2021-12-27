package main

//build this with $ GOOS=linux go build -o main

import (
	"fmt"
	"math/rand"
	"os"
	"strconv"
	"time"

	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3"
)

type Response struct {
	URL      string `json:"url"`
	FileName string `json:"file_name"`
}

func Handler() (Response, error) {
	s3Bucket := os.Getenv("S3_BUCKET")
	if s3Bucket == "" {
		fmt.Println("an s3 bucket was unable to be loaded from env vars")
	}

	rand.Seed(time.Now().UnixNano())
	myKey := rand.Int()

	sess, _ := session.NewSession(&aws.Config{
		Region: aws.String("us-east-2")},
	)
	svc := s3.New(sess)

	req, _ := svc.PutObjectRequest(&s3.PutObjectInput{
		Bucket: aws.String(s3Bucket),
		Key:    aws.String(strconv.Itoa(myKey) + ".jpg"),
	})
	str, err := req.Presign(15 * time.Minute)

	return Response{
		URL:      str,
		FileName: strconv.Itoa(myKey) + ".jpg",
	}, err
}

func main() {
	lambda.Start(Handler)
}
