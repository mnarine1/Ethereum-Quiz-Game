# Ethereum Quiz Game

Ethereum Quiz Game is a game that runs on the Ethereum blockchain platform. Users are able to create quizzes for other users to take, as well as, take quizzes created by other users. Each quiz has an entrance fee and an accruing pool. The first user to answer the quiz question correctly will be deemed the winner, and the total amount in the quiz's pool will be awarded to the winner.

## Software Dependencies

The following software must be installed in order to successfully run this application:

*	Metamask *6.4.0*
*	Truffle *5.0*
*	Ganache *2.0.0*
*	Lite-Server *6.4.1*
*	Solidity *0.5.0*

### Software Installation

Install Lite-Server and project dependencies from the project directory. 

#### Metamask

Download the extenstion on the [Chrome Store](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn).

#### Truffle

	$ npm install -g truffle@5.0.0

#### Ganache

Download [Ganache GUI](https://truffleframework.com/ganache) client.

#### Lite-Server

	$ npm install lite-server --save-dev

#### Project Dependencies

	$ npm install

---
After installing the project dependencies, there should be a new directory named "node_modules" in the project directory.

## Setup

### Ganache

Create a new workspace in the Ganache GUI client and add a project by selecting the truffle-config.js file from the project directory.

The host name should be *127.0.0.1* and port number *8545*.

Create the workspace and start the local server by opening the workspace. You should be able to see the account numbers.

### Metamask

Import the accounts by using the seed phrase. Copy and paste the seed phrase from Ganache into Metamask and setup the account.

Once logged in, you should be able to see the same accounts from Ganache in Metamask.

### Deploying the Contract

In the project directory, execute the following:

	$ truffle compile
    $ truffle migrate --reset

In Ganache, under the *Contracts* tab, you should see the deployed contracts and their addresses. Copy the address of the *Quiz* contract and paste it into line 310 on the *script.js* file located in the src/js directory. *(This is highly recommended)*

Alternatively this can be accomplished in the DApp. *(Although the user must manually reconnect each time the page is refreshed)*

## Running the Project

Ganache GUI should be running with the workspace open.

While in the project directory, run the following:

	$ npm run dev

This will start the lite-server on host *127.0.01* port *3000* by default. Any port other than port *8545* will work.

The DApp will open and Metamask will ask for permission to connect to the DApp. Confirm to connect the accounts to the DApp.

Refresh the page to load the first account.

If you did not add the contract address to *script.js*, you can connect to the contract by clicking the contract icon at the top-right of the DApp, pasting the address in the input field and clicking connect.

From this point, the user can either make a quiz or take a quiz.

### Switching Between Accounts

In order to switch between accounts, open the metamask extension and switch the account. Refresh the page.

### Make a Quiz

Every user has the ability to make a quiz. Select the make a quiz option and input the following information:

* Quiz Name
* Entrance Fee Amount in Ether (*ETH*)
* Initial Pool Amount in Ether (*ETH*)
* Question
* 1 Correct Answer Choice
* 3 Incorrect Answer Choices

Click the *Make Quiz* button to create a quiz. Metamask will ask to confirm the transaction. Click confirm to make the quiz.

### Take a Quiz

Every user has the ability to take a quiz, however, a user cannot take a quiz that they have created.

Select the take a quiz option and a list of all quizzes that have been created by all users.

To take a certain quiz, click on that quiz and you will be taken to the fee payment page. Click *yes* to pay the fee. Click *no* to return to the list of qizzess.

If the user clicks *yes*, Metamask will ask the user to confirm the transaction.

If the user confirms the transaction, then the user will be taken to the quiz page. Here, the user can read the question and select their answer choice. Once an answer choice is selected, the user should be able to submit their answer and the attempt will be graded.

If the user answers correctly, then the user is paid with the amount in that quiz's pool.

## Missing Functionalities

The following functionalities do not work properly:

* Grading the user's submitted answer choice
* Awarding the winning user the pool amount
