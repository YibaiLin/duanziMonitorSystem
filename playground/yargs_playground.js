import yargs from 'yargs';
const args = yargs
.option('file', {
    alias: 'f',
    string: true,
    default: "output.txt",
    describe: "output file name"
})
.option('mongodb', {
    alias: 'm',
    boolean: true,
    default: false,
    describe: 'choose to use local mongodb as default db'
})
.option('port', {
    alias: 'p',
    string: true,
    default: '27017',
    describe: "get port number"
})
.argv;

if (args.mongodb == true) {
    console.log("we will use local mongodb at port " + args.port + " to store data");
}else {
    console.log("we will output data to " + args.file);
}
