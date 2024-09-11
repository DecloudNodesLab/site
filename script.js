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
    displayOutput('\nWelcome to <span class="words">Decloud Nodes Lab</span> site!');}, 1000);
    setTimeout(function() {
	displayOutput('\n<span class="words">Decloud Nodes Lab</span> PoS validator info.');
	displayOutput('\nSupported mainnets: <span class="words">8</span> ');
	displayOutput('Total delegate: <span class="words">4851255$</span> ');
	displayOutput('\nDelegate: ');
	displayOutput('<a href="https://restake.app/akash/akashvaloper1ax4c40gn3s74xxm75g6cmts3fw7rq64gq0kaj4" target="_blank">Akash Network</a> - <a href="https://restake.app/sentinel/sentvaloper1ax4c40gn3s74xxm75g6cmts3fw7rq64grgugsr" target="_blank">Sentinel dVPN</a> - <a href="https://restake.app/juno/junovaloper1ax4c40gn3s74xxm75g6cmts3fw7rq64gweqg8q" target="_blank">Juno</a>');
	displayOutput('<a href="https://explorer.nodestake.top/gitopia/staking/gitopiavaloper1nuphu4p06dlgx2se0w58z5c7yv00r5gl37qcrm" target="_blank">Gitopa</a> - <a href="https://restake.app/realio/realiovaloper1chee8l82uxqfduxr8x0pfrp9psl08cy4a20m0u" target="_blank">Realio Network</a> - <a href="https://restake.app/kyve/kyvevaloper1ax4c40gn3s74xxm75g6cmts3fw7rq64gzgc27r" target="_blank">Kyve</a>');
	displayOutput('<a href="https://restake.app/source/sourcevaloper126erf9dmm4e3fs0suk9lnv24wudswkm3ekfqfh" target="_blank">Source</a> - <a href="https://restake.app/empowerchain/empowervaloper1ax4c40gn3s74xxm75g6cmts3fw7rq64grp0c0w" target="_blank">Empower</a>')
        }, 2000);
	setTimeout(function() {
	displayOutput('\nEnter the command "mainnets","testnets" or \n"software" to continue. Or select a section:');
    displayOutput('<a href="https://services.declab.pro/guides" target="_blank">guides</a> - <a href="https://services.declab.pro/blockchains-lab/mainnets" target="_blank">mainnets</a> - <a href="https://services.declab.pro/blockchains-lab/testnets" target="_blank">testnets</a> - <a href="https://services.declab.pro/software" target="_blank">software</a>');}, 3000);
  } else if (command === 'mainnets') {
	window.open('https://services.declab.pro/blockchains-lab/mainnets', '_blank');
    displayOutput('Mainnets opened  in a new tab your browser!');
    displayOutput('Enter the command to continue or select a section:');
  } else if (command === 'testnets') {
	window.open('https://services.declab.pro/blockchains-lab/testnets', '_blank');
    displayOutput('Testnets opened  in a new tab your browser!');
    displayOutput('Enter the command to continue or select a section:');
  } else if (command === 'software') {
	window.open('https://services.declab.pro/blockchains-lab/software', '_blank');
    displayOutput('Software opened  in a new tab your browser!');
    displayOutput('Enter the command to continue or select a section:');
  } else if (command === 'guides') {
	window.open('https://services.declab.pro/guides', '_blank');
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

