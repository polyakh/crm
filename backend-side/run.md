run
keycloak:
docker run --rm -p 8080:8080 -e KC_BOOTSTRAP_ADMIN_USERNAME=admin -e KC_BOOTSTRAP_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:26.0.7 start-dev

docker run --rm -e POSTGRES_HOST_AUTH_METHOD=trust --name crm-postgres -p 5433:5432 -d postgres


https://chatgpt.com/share/677c4465-9250-8011-b928-d5f9343d9618


https://www.reddit.com/r/nestjs/comments/1fwl96f/what_folder_structure_do_you_use/