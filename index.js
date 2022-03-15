fs = require('fs');
var parser = require('xml2json');

fs.readFile('xml/artikel.xml', function (err, data) {
    var jsonArtikel = parser.toJson(data);
    const obj = JSON.parse(jsonArtikel);

    fs.readFile('xml/Direktor.xml', function (err, data) {
        var jsonDirektor = parser.toJson(data);

        fs.readFile('xml/Proizvajalec.xml', function (err, data) {
            let sum = 0;
            let st = 0;
            let d = [];

            obj.root.artikel.map((element, index)=>{
                st = st +1;
                sum = sum + Number(element.cena);
                
            })

            let povp = sum/st;
            
            obj.root.artikel.map((element, index)=>{
                if(Number(element.cena)>povp){
                    d.push(element);
                }
            })

            //izpis izdelkov, ki imajo ceno večje od povprečja
            fs.writeFile("prenos.txt", JSON.stringify(d),
                function(err){
                    console.log(d);
                }
            )}

        );
    });

});