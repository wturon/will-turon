package main

import (
	"fmt"

	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3"
)

type Response struct {
	Keys []string `json:"keys"`
}

func handler() (Response, error) {
	sess, _ := session.NewSession(&aws.Config{
		Region: aws.String("us-east-2")},
	)
	svc := s3.New(sess)

	list, err := svc.ListObjectsV2(&s3.ListObjectsV2Input{
		Bucket: aws.String("wturon-full-res-images"),
	})
	if err != nil {
		fmt.Println(err)
	}

	var keys []string
	fmt.Println("output.Contents")
	for _, item := range list.Contents {
		keys = append(keys, *item.Key)
	}

	return Response{
		Keys: keys,
	}, err

}

func main() {
	lambda.Start(handler)
}
