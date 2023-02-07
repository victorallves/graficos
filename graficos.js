function desenharGrafico (){

    //grafico pizza 
    var tabela = new google.visualization.DataTable();

    tabela.addColumn('string','categorias');
    tabela.addColumn('number','valores');
    
    tabela.addRows([
        ['Educação',2000],
        ['Transporte',500],
        ['Lazer',230],
        ['Saúde',50],
        ['Cartão de crédito',900],
        ['Alimentação',260]
    ]);

    var opcoes = {
        'title':'Tipos de Gastos',
        'height': 400,
        'width': 800,
        'pieHole': 0.4,
        'is3D': true,
        'legend': 'labeled', 
        'pieSliceText': 'value',
        'slices': {
            0:{}, 
            1:{color:'gray'}, 
            2:{color:'#a6a6a6'},
            3:{color:'gray'},
            4:{offset: 0.2}, 
            5:{color:'gray'}
        }

    };

    var grafico = new google.visualization.PieChart(document.getElementById('graficoPizza'));

    grafico.draw(tabela, opcoes);

    //grafico de linhas
    tabela = new google.visualization.DataTable();
    
    tabela.addColumn('string','Mês');
    tabela.addColumn('number','Gastos');
    
    tabela.addRows([
        ['jan',800],
        ['fev',400],
        ['mar',1100],
        ['abr',400],
        ['mai',500],
        ['jun',750],
        ['jul',1500],
        ['ago',650],
        ['set',850],
        ['out',400],
        ['nov',1000],
        ['dez',720]

    ]);

    var opcoes = {
        title: 'Gastos por Mês',
        width: 650,
        height: 300,
        vAxis:{
            format: 'currency',
            gridlines: {count: 5, color: 'transparent'}
              },
        curveType: 'function',
        legend: 'none'
    }

    var grafico = new google.visualization.LineChart(document.getElementById('graficoLinha'));

    grafico.draw(tabela,opcoes);

    //grafico de colunas   
    var tabela = new google.visualization.arrayToDataTable([
            ['Mês', 'Entrada','Saida'],
            ['jan',2500,1000],
            ['fev',1000,500],
            ['mar',3000,1300],
            ['abr',1500,1700],
            ['mai',5000,2250],
            ['jun',3567,3000],
            ['jul',3452,1468],
            ['ago',1833,5250],
            ['set',1800,1000],
            ['out',1800,1000],
            ['nov',3569,1500],
            ['dez',3000 ,1740] 
        ])

        var opcoes = {
            title: 'Entradas e Saidas da Conta',
            width: 800,
            height: 400,
            vAxis: {
                gridlines:{color:'transparent'},
                format: 'currency',
                title: 'Valores'
            },
            hAxis: {title: 'Mês'},
        }

        var grafico = new google.visualization.ColumnChart(document.getElementById('graficoColuna'));

        grafico.draw(tabela,opcoes);

        //grafico de barras
        var tabela = new google.visualization.DataTable();

        tabela.addColumn('string','categorias');
        tabela.addColumn('number','valores');
        tabela.addColumn({type: 'string', role: 'annotation'});
        tabela.addColumn({type: 'string', role: 'style'});

        tabela.addRows([
    
            ['Educação',2000,'R$2.000,00','blue'],
            ['Transporte',500,'R$500','grey'],
            ['Lazer',230,'R$230','grey'],
            ['Saúde',50,'R$50','grey'],
            ['Cartão de crédito',900,'R$900','purple'],
            ['Alimentação',260,'R$260','grey']
        ]);

        //ordenando grafico de barras em ordem decresente
        tabela.sort([{column: 1, desc: true}]);

        var opcoes = {
            title:'Tipos de Gastos',
            height: 400,
            width: 800,
            vAxis: {
                gridlines: {
                count: 0, color:'transparent'
                    }},
            legend: 'none',
            hAxis:{ 
                gridlines: 
                    {
                        color:'transparent'
                    },
                    format: 'currency',
                    textPosition: 'none'       
                    },
            annotations:
                    {
                        alwaysOutside: true
                    }
        }

        var grafico = new google.visualization.BarChart(document.getElementById('graficoBarras'));

        grafico.draw(tabela,opcoes);


        // grafico de barras com arquivo Json
        
        var dadosJson = $.ajax({
            url: 'https://gist.githubusercontent.com/victorallves/e142856e5040747b99b61c0047ff6777/raw/f35eaf7ac68f52c6b1889f330638b8473d11d536/dados.json',
            dataType: 'json',
            async: false
        }).responseText;

        var tabela = new google.visualization.DataTable(dadosJson);

        tabela.sort([{column: 1, desc: true}]);
        var conversao = tabela.toJSON();
        console.log(conversao);

        var opcoes = {
            title:'Usuarios e Poupanças',
            height: 600,
            width: 800,
            legend: 'none',
            hAxis: {
                        gridlines:{color: 'transparent'}
                    },
                    textPosition: 'none',
            annotations:
                    {
                        alwaysOutside: true
                    }
        }

        var grafico = new google.visualization.BarChart(document.getElementById('graficoBarrasJson'));

        grafico.draw(tabela,opcoes);

}                           

