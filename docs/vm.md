# Copy project to VM

1. Build the project with `bun run build`.
2. Run `bun run preview` to assert the application runs as expected before deployment.
3. SSH into the VM with `ssh <username>@it2810-16.idi.ntnu.no`. Replace `<username>` with your username.
4. Copy files from the dist folder to the VM with `scp -r dist <username>@it2810-16.idi.ntnu.no:/tmp/`. Replace `<username>` with your username.
5. If there is already a version of the project on the VM, run `sudo rm -r /var/www/html/project1` to remove the old files.
6. Move files from `/tmp/dist` to `/var/www/html` with `sudo mv /tmp/dist/\* /var/www/html/project1`.
