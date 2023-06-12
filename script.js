const outputElement = document.getElementById('output');
const inputElement = document.getElementById('commandInput');

function displayOutput(output) {
  outputElement.innerHTML += `<div>${output}</div>`;
  outputElement.scrollTop = outputElement.scrollHeight;
}

function processCommand() {
  const command = inputElement.value;
  displayOutput(`<span>\nroot@localhost:~$</span> ${command}`);
  inputElement.value = '';

  // Здесь можно добавить логику обработки команды, выполнения скриптов и т.д.

 // Обработка команды Hello World!
  if (command === 'hello world!') {
	setTimeout(function() {
    displayOutput('\nWelcome to <span class="words">Decloud Nodes Lab</span> site!');
    displayOutput('<a href="http://dnl.explorer.ingress.europlots.com/" target="_blank">\nDecloud Nodes Lab Explorer && Wallet</a>
    displayOutput('\nContact link:');
    displayOutput('<a href="https://github.com/DecloudNodesLab/" target="_blank">Github</a> - <a href="https://twitter.com/NodesLab" target="_blank">Twitter</a> - <a href="https://t.me/NodesLab" target="_blank">Telegram_RU</a>');}, 1000);
    setTimeout(function() {
	displayOutput('\n<span class="words">Decloud Nodes Lab</span> validator info.');
	displayOutput('Delegate: ');
	displayOutput('<a href="https://restake.app/akash/akashvaloper1ax4c40gn3s74xxm75g6cmts3fw7rq64gq0kaj4" target="_blank">Akash Network</a> - <a href="https://restake.app/sentinel/sentvaloper1ax4c40gn3s74xxm75g6cmts3fw7rq64grgugsr" target="_blank">Sentinel dVPN</a> - <a href="https://restake.app/desmos/desmosvaloper1fkpnxtn4nvm27zkpyuvcz3rpa9rzxm70q4v8sn" target="_blank">Desmos</a>- <a href="https://restake.app/kava/kavavaloper1mrd5kqtq28p39wcrkm8tk8avtn57arrurxfah0" target="_blank">Kava</a>');
	displayOutput('<a href="https://explorer.nodestake.top/gitopia/staking/gitopiavaloper1nuphu4p06dlgx2se0w58z5c7yv00r5gl37qcrm" target="_blank">Gitopa</a> - <a href="https://restake.app/realio/realiovaloper1chee8l82uxqfduxr8x0pfrp9psl08cy4a20m0u" target="_blank">Realio</a> - <a href="https://restake.app/kyve/kyvevaloper1ax4c40gn3s74xxm75g6cmts3fw7rq64gzgc27r" target="_blank">Kyve</a>- <a href="https://restake.app/vidulum/vdlvaloper1nuphu4p06dlgx2se0w58z5c7yv00r5gle0h5gs" target="_blank">Vidulum</a>')
	displayOutput('\nTotal delegate: <span class="words">612779$</span> ');}, 2000);
	setTimeout(function() {
	displayOutput('\nEnter the command "mainnets","testnets" or \n"software" to continue. Or select a section:');
    displayOutput('<a href="https://github.com/DecloudNodesLab/Guides/blob/main/README.md" target="_blank">guides</a> - <a href="https://github.com/DecloudNodesLab/Projects/tree/main/CosmosSDK/Mainnets" target="_blank">mainnets</a> - <a href="https://github.com/DecloudNodesLab/Projects/tree/main/CosmosSDK/Testnets" target="_blank">testnets</a> - <a href="https://github.com/DecloudNodesLab/Projects/tree/main/Software" target="_blank">software</a>');}, 3000);
  } else if (command === 'mainnets') {
	window.open('https://github.com/DecloudNodesLab/Projects/tree/main/CosmosSDK/Mainnets', '_blank');
    displayOutput('Mainnets opened  in a new tab your browser!');
    displayOutput('Enter the command to continue or select a section:');
  } else if (command === 'testnets') {
	window.open('https://github.com/DecloudNodesLab/Projects/tree/main/CosmosSDK/Testnets', '_blank');
    displayOutput('Testnets opened  in a new tab your browser!');
    displayOutput('Enter the command to continue or select a section:');
  } else if (command === 'software') {
	window.open('https://github.com/DecloudNodesLab/Projects/tree/main/Software', '_blank');
    displayOutput('Software opened  in a new tab your browser!');
    displayOutput('Enter the command to continue or select a section:');
  } else if (command === 'guides') {
	window.open('https://github.com/DecloudNodesLab/Guides/blob/main/README.md', '_blank');
    displayOutput('Guides opened  in a new tab your browser!');
    displayOutput('Enter the command to continue or select a section:');
  }
    else {
    displayOutput(`bash: Command not found: ${command}`);
  }
}

// Обработка нажатия клавиши Enter
inputElement.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    processCommand();
  }
});

// Имитация ввода команды Hello World! при загрузке страницы
window.addEventListener('load', function() {
  setTimeout(function() {
    inputElement.value = 'hello world!';
    processCommand();
  }, 1000);
});

