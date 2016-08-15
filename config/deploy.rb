# config valid only for current version of Capistrano
lock '3.5.0'

set :application, 'peruvian_food_in_rva'
set :repo_url, 'https://github.com/robbrucker/peruvianfoodsite.git'
set :git_https_username, 'yourusername'
set :git_https_password, 'yourpassword'
set :deploy_to, 'home/peruvian'
set :scm, :git
