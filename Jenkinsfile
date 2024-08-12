pipeline {
    agent {
        docker {
            image 'docker:20.10-dind'
            args '--user root --privileged' // Mount Docker socket to access the host's Docker daemon
        }
    }
        stages {
             stage('Start Docker Daemon') {
                      steps {
                             sh 'dockerd &' // Start Docker daemon
                              sleep 15 // Wait for Docker daemon to start
            }
        }
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
		stage ("Approval from QAT"){
			steps {
				script {
					Boolean userInput = input(id: 'Proceed1', message: 'Do you want to Promote this build?', parameters: [[$class: 'BooleanParameterDefinition', defaultValue: true, description: '', name: 'Please confirm you agree with this']])
                				echo 'userInput: ' + userInput
				}
			}
		}
	}
}
