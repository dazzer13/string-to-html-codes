/**
 * Created by labithiotis on 24/01/2014.
 */

(function(window, document, String){

    "use strict";

    var aCodes = [];

    String.prototype.toHTMLCode = function(){

        var sNewString = "";

        this.split('').forEach(function(char){
            sNewString += getCode(char);
        });

        return sNewString;

    };

    function getCode(sChar){

        var sCode = null;

        aCodes.forEach(function(object){
            if(object.character === sChar){
                sCode = object.code;
            }
        });

        return sCode || sChar;

    }

    aCodes = [
        {
            "code":"&#32;",
            "character":" ",
            "description":"Space"
        },
        {
            "code":"&#33;",
            "character":"!",
            "description":"Exclamation mark"
        },
        {
            "code":"&#34;",
            "character":"\"",
            "description":"Quotation mark"
        },
        {
            "code":"&#35;",
            "character":"#",
            "description":"Number sign"
        },
        {
            "code":"&#36;",
            "character":"$",
            "description":"Dollar sign"
        },
        {
            "code":"&#37;",
            "character":"%",
            "description":"Percent sign"
        },
        {
            "code":"&#38;",
            "character":"&",
            "description":"Ampersand"
        },
        {
            "code":"&#39;",
            "character":"",
            "description":"Apostrophe"
        },
        {
            "code":"&#40;",
            "character":"(",
            "description":"Left parenthesis"
        },
        {
            "code":"&#41;",
            "character":")",
            "description":"Right parenthesis"
        },
        {
            "code":"&#42;",
            "character":"*",
            "description":"Asterisk"
        },
        {
            "code":"&#43;",
            "character":"+",
            "description":"Plus sign"
        },
        {
            "code":"&#44;",
            "character":",",
            "description":"Comma"
        },
        {
            "code":"&#45;",
            "character":"-",
            "description":"Hyphen"
        },
        {
            "code":"&#46;",
            "character":".",
            "description":"Period (fullstop)"
        },
        {
            "code":"&#47;",
            "character":"/",
            "description":"Solidus (slash)"
        },
        {
            "code":"&#48;",
            "character":"0",
            "description":"Digit 0"
        },
        {
            "code":"&#49;",
            "character":"1",
            "description":"Digit 1"
        },
        {
            "code":"&#50;",
            "character":"2",
            "description":"Digit 2"
        },
        {
            "code":"&#51;",
            "character":"3",
            "description":"Digit 3"
        },
        {
            "code":"&#52;",
            "character":"4",
            "description":"Digit 4"
        },
        {
            "code":"&#53;",
            "character":"5",
            "description":"Digit 5"
        },
        {
            "code":"&#54;",
            "character":"6",
            "description":"Digit 6"
        },
        {
            "code":"&#55;",
            "character":"7",
            "description":"Digit 7"
        },
        {
            "code":"&#56;",
            "character":"8",
            "description":"Digit 8"
        },
        {
            "code":"&#57;",
            "character":"9",
            "description":"Digit 9"
        },
        {
            "code":"&#58;",
            "character":":",
            "description":"Colon"
        },
        {
            "code":"&#59;",
            "character":";",
            "description":"Semi-colon"
        },
        {
            "code":"&#60;",
            "character":"<",
            "description":"Less than"
        },
        {
            "code":"&#61;",
            "character":"=",
            "description":"Equals sign"
        },
        {
            "code":"&#62;",
            "character":">",
            "description":"Greater than"
        },
        {
            "code":"&#63;",
            "character":"?",
            "description":"Question mark"
        },
        {
            "code":"&#64;",
            "character":"@",
            "description":"Commercial at"
        },
        {
            "code":"&#65;",
            "character":"A",
            "description":"Capital letter A"
        },
        {
            "code":"&#66;",
            "character":"B",
            "description":"Capital letter B"
        },
        {
            "code":"&#67;",
            "character":"C",
            "description":"Capital letter C"
        },
        {
            "code":"&#68;",
            "character":"D",
            "description":"Capital letter D"
        },
        {
            "code":"&#69;",
            "character":"E",
            "description":"Capital letter E"
        },
        {
            "code":"&#70;",
            "character":"F",
            "description":"Capital letter F"
        },
        {
            "code":"&#71;",
            "character":"G",
            "description":"Capital letter G"
        },
        {
            "code":"&#72;",
            "character":"H",
            "description":"Capital letter H"
        },
        {
            "code":"&#73;",
            "character":"I",
            "description":"Capital letter I"
        },
        {
            "code":"&#74;",
            "character":"J",
            "description":"Capital letter J"
        },
        {
            "code":"&#75;",
            "character":"K",
            "description":"Capital letter K"
        },
        {
            "code":"&#76;",
            "character":"L",
            "description":"Capital letter L"
        },
        {
            "code":"&#77;",
            "character":"M",
            "description":"Capital letter M"
        },
        {
            "code":"&#78;",
            "character":"N",
            "description":"Capital letter N"
        },
        {
            "code":"&#79;",
            "character":"O",
            "description":"Capital letter O"
        },
        {
            "code":"&#80;",
            "character":"P",
            "description":"Capital letter P"
        },
        {
            "code":"&#81;",
            "character":"Q",
            "description":"Capital letter Q"
        },
        {
            "code":"&#82;",
            "character":"R",
            "description":"Capital letter R"
        },
        {
            "code":"&#83;",
            "character":"S",
            "description":"Capital letter S"
        },
        {
            "code":"&#84;",
            "character":"T",
            "description":"Capital letter T"
        },
        {
            "code":"&#85;",
            "character":"U",
            "description":"Capital letter U"
        },
        {
            "code":"&#86;",
            "character":"V",
            "description":"Capital letter V"
        },
        {
            "code":"&#87;",
            "character":"W",
            "description":"Capital letter W"
        },
        {
            "code":"&#88;",
            "character":"X",
            "description":"Capital letter X"
        },
        {
            "code":"&#89;",
            "character":"Y",
            "description":"Capital letter Y"
        },
        {
            "code":"&#90;",
            "character":"Z",
            "description":"Capital letter Z"
        },
        {
            "code":"&#91;",
            "character":"[",
            "description":"Left square bracket"
        },
        {
            "code":"&#92;",
            "character":"\\",
            "description":"Reverse solidus (backslash)"
        },
        {
            "code":"&#93;",
            "character":"]",
            "description":"Right square bracket"
        },
        {
            "code":"&#94;",
            "character":"^",
            "description":"Caret"
        },
        {
            "code":"&#95;",
            "character":"_",
            "description":"Horizontal bar"
        },
        {
            "code":"&#96;",
            "character":"`",
            "description":"Grave accent"
        },
        {
            "code":"&#97;",
            "character":"a",
            "description":"Small letter a"
        },
        {
            "code":"&#98;",
            "character":"b",
            "description":"Small letter b"
        },
        {
            "code":"&#99;",
            "character":"c",
            "description":"Small letter c"
        },
        {
            "code":"&#100;",
            "character":"d",
            "description":"Small letter d"
        },
        {
            "code":"&#101;",
            "character":"e",
            "description":"Small letter e"
        },
        {
            "code":"&#102;",
            "character":"f",
            "description":"Small letter f"
        },
        {
            "code":"&#103;",
            "character":"g",
            "description":"Small letter g"
        },
        {
            "code":"&#104;",
            "character":"h",
            "description":"Small letter h"
        },
        {
            "code":"&#105;",
            "character":"i",
            "description":"Small letter i"
        },
        {
            "code":"&#106;",
            "character":"j",
            "description":"Small letter j"
        },
        {
            "code":"&#107;",
            "character":"k",
            "description":"Small letter k"
        },
        {
            "code":"&#108;",
            "character":"l",
            "description":"Small letter l"
        },
        {
            "code":"&#109;",
            "character":"m",
            "description":"Small letter m"
        },
        {
            "code":"&#110;",
            "character":"n",
            "description":"Small letter n"
        },
        {
            "code":"&#111;",
            "character":"o",
            "description":"Small letter o"
        },
        {
            "code":"&#112;",
            "character":"p",
            "description":"Small letter p"
        },
        {
            "code":"&#113;",
            "character":"q",
            "description":"Small letter q"
        },
        {
            "code":"&#114;",
            "character":"r",
            "description":"Small letter r"
        },
        {
            "code":"&#115;",
            "character":"s",
            "description":"Small letter s"
        },
        {
            "code":"&#116;",
            "character":"t",
            "description":"Small letter t"
        },
        {
            "code":"&#117;",
            "character":"u",
            "description":"Small letter u"
        },
        {
            "code":"&#118;",
            "character":"v",
            "description":"Small letter v"
        },
        {
            "code":"&#119;",
            "character":"w",
            "description":"Small letter w"
        },
        {
            "code":"&#120;",
            "character":"x",
            "description":"Small letter x"
        },
        {
            "code":"&#121;",
            "character":"y",
            "description":"Small letter y"
        },
        {
            "code":"&#122;",
            "character":"z",
            "description":"Small letter z"
        },
        {
            "code":"&#123;",
            "character":"{",
            "description":"Left french brace"
        },
        {
            "code":"&#124;",
            "character":"|",
            "description":"Vertical bar"
        },
        {
            "code":"&#125;",
            "character":"}",
            "description":"Right french brace"
        },
        {
            "code":"&#126;",
            "character":"~",
            "description":"Tilde"
        },
        {
            "code":"&#160;",
            "character":"",
            "description":"Non-breaking space"
        },
        {
            "code":"&#161;",
            "character":"¡",
            "description":"Inverted exclamation"
        },
        {
            "code":"&#162;",
            "character":"¢",
            "description":"Cent sign"
        },
        {
            "code":"&#163;",
            "character":"£",
            "description":"Pound sterling"
        },
        {
            "code":"&#164;",
            "character":"¤",
            "description":"General currency sign"
        },
        {
            "code":"&#165;",
            "character":"¥",
            "description":"Yen sign"
        },
        {
            "code":"&#166;",
            "character":"¦",
            "description":"Broken vertical bar"
        },
        {
            "code":"&#167;",
            "character":"§",
            "description":"Section sign"
        },
        {
            "code":"&#168;",
            "character":"¨",
            "description":"Umlaut (dieresis)"
        },
        {
            "code":"&#169;",
            "character":"©",
            "description":"Copyright"
        },
        {
            "code":"&#170;",
            "character":"ª",
            "description":"Feminine ordinal"
        },
        {
            "code":"&#171;",
            "character":"«",
            "description":"Left angle quote, guillemotleft"
        },
        {
            "code":"&#172;",
            "character":"¬",
            "description":"Not sign"
        },
        {
            "code":"&#173;",
            "character":"",
            "description":"Soft hyphen"
        },
        {
            "code":"&#174;",
            "character":"®",
            "description":"Registered trademark"
        },
        {
            "code":"&#175;",
            "character":"¯",
            "description":"Macron accent"
        },
        {
            "code":"&#176;",
            "character":"°",
            "description":"Degree sign"
        },
        {
            "code":"&#177;",
            "character":"±",
            "description":"Plus or minus"
        },
        {
            "code":"&#178;",
            "character":"²",
            "description":"Superscript two"
        },
        {
            "code":"&#179;",
            "character":"³",
            "description":"Superscript three)"
        },
        {
            "code":"&#180;",
            "character":"´",
            "description":"Acute accent"
        },
        {
            "code":"&#181;",
            "character":"µ",
            "description":"Micro sign"
        },
        {
            "code":"&#182;",
            "character":"¶",
            "description":"Paragraph sign"
        },
        {
            "code":"&#183;",
            "character":"·",
            "description":"Middle dot"
        },
        {
            "code":"&#184;",
            "character":"¸",
            "description":"Cedilla"
        },
        {
            "code":"&#185;",
            "character":"¹",
            "description":"Superscript one"
        },
        {
            "code":"&#186;",
            "character":"º",
            "description":"Masculine ordinal"
        },
        {
            "code":"&#187;",
            "character":"»",
            "description":"Right angle quote, guillemotright"
        },
        {
            "code":"&#188;",
            "character":"¼",
            "description":"Fraction one-fourth"
        },
        {
            "code":"&#189;",
            "character":"½",
            "description":"Fraction one-half"
        },
        {
            "code":"&#190;",
            "character":"¾",
            "description":"Fraction three-fourths"
        },
        {
            "code":"&#191;",
            "character":"¿",
            "description":"Inverted question mark"
        },
        {
            "code":"&#192;",
            "character":"À",
            "description":"Capital A, grave accent"
        },
        {
            "code":"&#193;",
            "character":"Á",
            "description":"Capital A, acute accent"
        },
        {
            "code":"&#194;",
            "character":"Â",
            "description":"Capital A, circumflex accent"
        },
        {
            "code":"&#195;",
            "character":"Ã",
            "description":"Capital A, tilde"
        },
        {
            "code":"&#196;",
            "character":"Ä",
            "description":"Capital A, dieresis or umlaut mark"
        },
        {
            "code":"&#197;",
            "character":"Å",
            "description":"Capital A, ring"
        },
        {
            "code":"&#198;",
            "character":"Æ",
            "description":"Capital AE diphthong (ligature)"
        },
        {
            "code":"&#199;",
            "character":"Ç",
            "description":"Capital C, cedilla"
        },
        {
            "code":"&#200;",
            "character":"È",
            "description":"Capital E, grave accent"
        },
        {
            "code":"&#201;",
            "character":"É",
            "description":"Capital E, acute accent"
        },
        {
            "code":"&#202;",
            "character":"Ê",
            "description":"Capital E, circumflex accent"
        },
        {
            "code":"&#203;",
            "character":"Ë",
            "description":"Capital E, dieresis or umlaut mark"
        },
        {
            "code":"&#204;",
            "character":"Ì",
            "description":"Capital I, grave accent"
        },
        {
            "code":"&#205;",
            "character":"Í",
            "description":"Capital I, acute accent"
        },
        {
            "code":"&#206;",
            "character":"Î",
            "description":"Capital I, circumflex accent"
        },
        {
            "code":"&#207;",
            "character":"Ï",
            "description":"Capital I, dieresis or umlaut mark"
        },
        {
            "code":"&#208;",
            "character":"Ð",
            "description":"Capital Eth, Icelandic"
        },
        {
            "code":"&#209;",
            "character":"Ñ",
            "description":"Capital N, tilde"
        },
        {
            "code":"&#210;",
            "character":"Ò",
            "description":"Capital O, grave accent"
        },
        {
            "code":"&#211;",
            "character":"Ó",
            "description":"Capital O, acute accent"
        },
        {
            "code":"&#212;",
            "character":"Ô",
            "description":"Capital O, circumflex accent"
        },
        {
            "code":"&#213;",
            "character":"Õ",
            "description":"Capital O, tilde"
        },
        {
            "code":"&#214;",
            "character":"Ö",
            "description":"Capital O, dieresis or umlaut mark"
        },
        {
            "code":"&#215;",
            "character":"×",
            "description":"Multiply sign"
        },
        {
            "code":"&#216;",
            "character":"Ø",
            "description":"Capital O, slash"
        },
        {
            "code":"&#217;",
            "character":"Ù",
            "description":"Capital U, grave accent"
        },
        {
            "code":"&#218;",
            "character":"Ú",
            "description":"Capital U, acute accent"
        },
        {
            "code":"&#219;",
            "character":"Û",
            "description":"Capital U, circumflex accent"
        },
        {
            "code":"&#220;",
            "character":"Ü",
            "description":"Capital U, dieresis or umlaut mark"
        },
        {
            "code":"&#221;",
            "character":"Ý",
            "description":"Capital Y, acute accent"
        },
        {
            "code":"&#222;",
            "character":"Þ",
            "description":"Capital THORN, Icelandic"
        },
        {
            "code":"&#223;",
            "character":"ß",
            "description":"Small sharp s, German (sz ligature)"
        },
        {
            "code":"&#224;",
            "character":"à",
            "description":"Small a, grave accent"
        },
        {
            "code":"&#225;",
            "character":"á",
            "description":"Small a, acute accent"
        },
        {
            "code":"&#226;",
            "character":"â",
            "description":"Small a, circumflex accent"
        },
        {
            "code":"&#227;",
            "character":"ã",
            "description":"Small a, tilde"
        },
        {
            "code":"&#228;",
            "character":"ä",
            "description":"Small a, dieresis or umlaut mark"
        },
        {
            "code":"&#229;",
            "character":"å",
            "description":"Small a, ring)"
        },
        {
            "code":"&#230;",
            "character":"æ",
            "description":"Small ae diphthong (ligature)"
        },
        {
            "code":"&#231;",
            "character":"ç",
            "description":"Small c, cedilla"
        },
        {
            "code":"&#232;",
            "character":"è",
            "description":"Small e, grave accent"
        },
        {
            "code":"&#233;",
            "character":"é",
            "description":"Small e, acute accent"
        },
        {
            "code":"&#234;",
            "character":"ê",
            "description":"Small e, circumflex accent"
        },
        {
            "code":"&#235;",
            "character":"ë",
            "description":"Small e, dieresis or umlaut mark"
        },
        {
            "code":"&#236;",
            "character":"ì",
            "description":"Small i, grave accent"
        },
        {
            "code":"&#237;",
            "character":"í",
            "description":"Small i, acute accent"
        },
        {
            "code":"&#238;",
            "character":"î",
            "description":"Small i, circumflex accent"
        },
        {
            "code":"&#239;",
            "character":"ï",
            "description":"Small i, dieresis or umlaut mark"
        },
        {
            "code":"&#240;",
            "character":"ð",
            "description":"Small eth, Icelandic"
        },
        {
            "code":"&#241;",
            "character":"ñ",
            "description":"Small n, tilde"
        },
        {
            "code":"&#242;",
            "character":"ò",
            "description":"Small o, grave accent"
        },
        {
            "code":"&#243;",
            "character":"ó",
            "description":"Small o, acute accent"
        },
        {
            "code":"&#244;",
            "character":"ô",
            "description":"Small o, circumflex accent"
        },
        {
            "code":"&#245;",
            "character":"õ",
            "description":"Small o, tilde"
        },
        {
            "code":"&#246;",
            "character":"ö",
            "description":"Small o, dieresis or umlaut mark"
        },
        {
            "code":"&#247;",
            "character":"÷",
            "description":"Division sign"
        },
        {
            "code":"&#248;",
            "character":"ø",
            "description":"Small o, slash"
        },
        {
            "code":"&#249;",
            "character":"ù",
            "description":"Small u, grave accent"
        },
        {
            "code":"&#250;",
            "character":"ú",
            "description":"Small u, acute accent"
        },
        {
            "code":"&#251;",
            "character":"û",
            "description":"Small u, circumflex accent"
        },
        {
            "code":"&#252;",
            "character":"ü",
            "description":"Small u, dieresis or umlaut mark"
        },
        {
            "code":"&#253;",
            "character":"ý",
            "description":"Small y, acute accent"
        },
        {
            "code":"&#254;",
            "character":"þ",
            "description":"Small thorn, Icelandic"
        },
        {
            "code":"&#255;",
            "character":"ÿ",
            "description":"Small y, dieresis or umlaut mark"
        }
    ];



}(window,document, String));

