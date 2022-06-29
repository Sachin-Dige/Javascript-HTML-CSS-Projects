function generate(){
    var quotes = {

        "~ Rene Descartes" : '"I think, therefore I am."',

        "~ Dr. APJ Abdul Kalam" : '"All of us do not have equal talent. But, all of us have an equal opportunity to develop our talents."',

        "~ Wayne Gretzky" : '"You miss 100% of the shots you do not take."',
        
        "~ Helen Keller": '"Life is either a daring adventure or nothing at all."',

        "~ Aristole": '"There is only one way to avoid criticism: do nothing, say nothing, and be nothing."',

        "~ Oscar Wilde": '" We are all in the gutter, but some of us are looking at the stars."',

        "~ Mark Twain": '"Whenever you find yourself on the side of the majority, it is time to pause and reflect."',

        "~ Albert Einsten": '"I have no special talent. I am only passionately curious."',

        "~ Mother Teresa": '"If you judge people, you have no time to love them."',

        "~ William Shakespeare": '"Steps Wisely, and slow. They stumble that run fast."'
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random()*authors.length)]

    var quote = quotes[author];

    document.getElementById("quote").innerHTML=quote;

    document.getElementById("author").innerHTML=author;


}
