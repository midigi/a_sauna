import boto3
import botocore
from .config import Aws3

s3 = boto3.client(
    "s3",
    #    This might be written wrong. I'm not sure if we can dot into the class Aws3 like this
    aws_access_key_id=Aws3.S3_KEY,
    aws_secret_access_key=Aws3.S3_SECRET
)


def upload_file_to_s3(file, bucket_name, acl="public-read"):
    try:
        s3.upload_fileobj(
            file,
            bucket_name,
            file.filename,
            ExtraArgs={
                "ACL": acl,
                "ContentType": file.content_type
            }
        )
        
    except Exception as e:
        # This is a catch all exception, edit this part to fit your needs.
        print("Something Happened: ", e)
        return e

    return "{}{}".format(app.config["S3_LOCATION"], file.filename)
