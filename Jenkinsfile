pipeline {
    agent {
        docker {
            image 'abhishekf5/maven-abhishek-docker-agent:v1'
            args '--user root -v /var/run/docker.sock:/var/run/docker.sock' // Mount Docker socket to access the host's Docker daemon
        }
    }
		stage('Remove Old Containers and Images') {
            steps {
                script {
                    sh '''
                    sudo docker stop user-web || true
                    sudo docker rm user-web || true
                    '''
                    sh '''
                    sudo docker rmi rahul9664/user-web:latest || true
                    '''
                }
            }
        }

		stage ("Building docker image"){
			steps{
				sh 'sudo docker build -t rahul9664/user-web:latest .'
			}
		}
		stage ("Push on Docker-Hub"){
			steps{
				withCredentials([string(credentialsId: 'docker_hub', variable: 'docker_passwd')]) {
    					sh 'sudo docker login -u rahul9664 -p ${docker_passwd}'
					sh 'sudo docker push rahul9664/user-web'
				}
			}
		}
		stage ("Testing the Build"){
			steps{
				sh 'sudo docker run -dit --name user-web -p 3000:3000 rahul9664/user-web:latest'
			}
		}
	}
}
