#!/bin/bash

# 设置本地和远程服务器的路径
LOCAL_DIR="_site/"
REMOTE_USER="root"
REMOTE_HOST="47.96.188.0"
REMOTE_DIR="/var/www/html/"

# 确保本地目录存在
if [ ! -d "$LOCAL_DIR" ]; then
  echo "Local directory $LOCAL_DIR does not exist!"
  exit 1
fi

# 使用 rsync 同步文件并覆盖远程目录内容
echo "Deploying files to remote server..."

rsync -av --delete "$LOCAL_DIR" "${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_DIR}"

# 检查是否成功
if [ $? -eq 0 ]; then
  echo "Deployment successful!"
else
  echo "Deployment failed!"
  exit 1
fi
