var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');

$("table").hide();

$('#search').click(searchCountries);

   
$('#country-name').keyup(function(e) {
    if (e.key === 'Enter') {
        searchCountries();
    };
});

function searchCountries() {
    var countryName = $('#country-name').val();
    if(!countryName.length) countryName = 'Poland';
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
}

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {

        var table = $('<table>').appendTo(countriesList);
        var row = $('<tr>').appendTo(table);

        $('<td>').html('<img src="' + item.flag + '">').appendTo(row);
        $('<td>').text(item.name).appendTo(row);
        
        var row = $('<tr>').appendTo(table);
        $('<td>').text('capital: ').appendTo(row);
        $('<td>').text(item.capital).appendTo(row);
        
        var row = $('<tr>').appendTo(table);
        $('<td>').text('region: ').appendTo(row);
        $('<td>').text(item.region).appendTo(row);
        
        var row = $('<tr>').appendTo(table);
        $('<td>').text('currencies: ').appendTo(row);
        var currenciesList = '';
        for (var i = 0; i < item.currencies.length; i++) {
            currenciesList += item.currencies[i].code + ' ';
        };
        $('<td>').text(currenciesList).appendTo(row);
       
        var row = $('<tr>').appendTo(table);
        $('<td>').text('languages: ').appendTo(row);
        var languagesList = '';
        for (var i = 0; i < item.languages.length; i++) {
            languagesList += item.languages[i].name + ' ';
        };
        $('<td>').text(languagesList).appendTo(row);
        
        var row = $('<tr>').appendTo(table);
        $('<td>').text('area: ').appendTo(row);
        $('<td>').text(item.area +  ' square km').appendTo(row);
    });
}
