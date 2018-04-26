//importowanie modułu
var OSinfo = require('../modules/OSINFO');
//1. ustawienie odpowiedniego enkodowania przyjmowanych danych --> Bez tego informacje, które przekazujemy do aplikacji będą odczytywane jako dane szesnastkowe
process.stdin.setEncoding('utf-8');
//2. nasłuchiwanie na zdarzenia odczytu
process.stdin.on('readable', function() {
	// tutaj treść tego co ma się wykonać w momencie odczytania wejścia.
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
	if(input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
        	case '/exit':
		        process.stdout.write('Quitting app!\n');
		        process.exit();
		        break;
        	case '/versionNode':
        		process.stdout.write('Node.js version is : ' + process.version.node + '\n');
        		break;
        	case '/SysLang':
        		process.stdout.write('System language is ' + process.env.lang + '\n');
        		break;
            case '/getOSinfo':
                OSinfo.print();
                break;
        	default :
        		process.stderr.write('Wrong instruction!\n');
        };
    }    
});
/*
function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:', type);
    console.log('Release:', release);
    console.log('CPU model:', cpu);
    console.log('Uptime: ~', (uptime / 60).toFixed(0), 'min');
    console.log('User name:', userInfo.username);
    console.log('Home dir:', userInfo.homedir);
}
*/