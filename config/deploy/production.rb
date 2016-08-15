
# production.rb
set :application, 'peruvian_food_in_rva'

## Servers we are going to deploy to ----------------------
server 'xxx.xxx.xxx.xxx', user: 'youruser'

## Server Settings ----------------------------------------
set :deploy_to, "/home/peruvian"
