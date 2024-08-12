pipeline {
    agent {
        docker {
            image 'docker:20.10-dind'
            args '--user root --privileged' // Mount Docker socket to access the host's Docker daemon
        }
    }
        stages {
		stage ("Building docker image"){
			steps{
				sh 'docker build -t web-image:latest .'
			}
		}
		
		stage ("Testing the Build"){
			steps{
				sh 'docker run -dit --name user-web -p 3000:3000 web-image:latest'
			}
		}
	}
}
