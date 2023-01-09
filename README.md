delete containers: sudo docker ps -aq | xargs sudo docker stop | xargs sudo docker rm
delete images: sudo docker images -aq | xargs sudo docker image rm

after container deletion:

-load seed data after deleting the container: sudo docker exec -it webshop-backend-container yarn seed
-possibly needs: sudo docker exec -it webshop-backend-container yarn seed && npx medusa migrations run
-setup minio bucket: public, access keys, with name "webshop"

storefront deployed is not based on dockerfile!