pipeline {
    agent {
        docker {
            image 'node:16'
            args '--user root -v /var/run/docker.sock:/var/run/docker.sock' // Mount Docker socket to access the host's Docker daemon
        }
    }

		stage ("Building docker image"){
			steps{
				sh 'sudo docker build -t web-image:latest .'
			}
		}
		
		stage ("Testing the Build"){
			steps{
				sh 'sudo docker run -dit --name user-web -p 3000:3000 web-image:latest'
			}
		}
	}
