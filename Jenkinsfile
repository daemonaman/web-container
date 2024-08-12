pipeline {
	agent any
	stages {
		stage ("pull code from git repo"){
			steps{
                git credentialsId: 'jenkins', url: 'git@bitbucket.org:hypersagetechnology/kidtryz-user-web.git'
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
