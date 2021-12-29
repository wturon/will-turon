package main

import (
	"fmt"

	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3"
)

type Response struct {
	Images []Image `json:"images"`
}

type Image struct {
	Key        string `key:"key"`
	FullResURL string `json:"fullResUrl"`
	LowResURL  string `json:"lowResUrl"`
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

	var images []Image
	fmt.Println("output.Contents")
	for _, item := range list.Contents {
		temp := Image{
			Key:        *item.Key,
			FullResURL: "https://wturon-full-res-images.s3.us-east-2.amazonaws.com/" + *item.Key,
			LowResURL:  "https://wturon-full-res-images-resized.s3.us-east-2.amazonaws.com/resized-" + *item.Key,
		}
		images = append(images, temp)
	}

	return Response{
		Images: images,
	}, err

}

func main() {
	lambda.Start(handler)
}
