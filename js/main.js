$(document).ready(function() {

    $('#playerGo').on('click', function() {
        console.log('again');
        var playerString = $('#playerName').value;
        getPlayer(playerString);
    })

    /*$.ajax({
        url: "https://api.playbattlegrounds.com/shards/xbox-na/matches/f50e6410-2753-476f-b4a3-63e9503dce33",
        type: "GET",
        headers: {
            "Accept": "application/json",
            "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxNDc5ZjQxMC0xOTllLTAxMzYtNjYyOS00ZDI4ZmVkOTQyNTUiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTIyNzgxNTQ4LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InB1Ymctc2FiZXJtZXRyaWNzIiwic2NvcGUiOiJjb21tdW5pdHkiLCJsaW1pdCI6MTB9.aIhe9_mD3YMN4AtcdxuIh3MsBKuc6a8mokrvmN9E2Ts",
        },
        success: function (data) {
            console.log(data);
        },
        error: function (data) {
            console.log(data);
        }
    });*/

});

function getPlayer(player) {
    $.ajax({
        url: "https://api.playbattlegrounds.com/shards/xbox-na/players?filter[playerNames]=gr3yhound75",
        type: "GET",
        headers: {
            "Accept": "application/json",
            "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxNDc5ZjQxMC0xOTllLTAxMzYtNjYyOS00ZDI4ZmVkOTQyNTUiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTIyNzgxNTQ4LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InB1Ymctc2FiZXJtZXRyaWNzIiwic2NvcGUiOiJjb21tdW5pdHkiLCJsaW1pdCI6MTB9.aIhe9_mD3YMN4AtcdxuIh3MsBKuc6a8mokrvmN9E2Ts",
        },
        success: function (data) {
            var matches = [];
            for (var i=0; i < data.data[0].relationships.matches.data.length; i++) {
                var item = '';
                var item = data.data[0].relationships.matches.data[i];
                matches.push(item);
            }
            console.log(matches);

            getMatch(matches[0].id);
        },
        error: function (data) {
            console.log(data);
        }
    });
}

function getMatch(match) {
    $.ajax({
        url: "https://api.playbattlegrounds.com/shards/xbox-na/matches/" + match + "",
        type: "GET",
        headers: {
            "Accept": "application/json",
            "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxNDc5ZjQxMC0xOTllLTAxMzYtNjYyOS00ZDI4ZmVkOTQyNTUiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTIyNzgxNTQ4LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InB1Ymctc2FiZXJtZXRyaWNzIiwic2NvcGUiOiJjb21tdW5pdHkiLCJsaW1pdCI6MTB9.aIhe9_mD3YMN4AtcdxuIh3MsBKuc6a8mokrvmN9E2Ts",
        },
        success: function (data) {
            console.log(data);
        },
        error: function (data) {
            console.log(data);
        }
    });
}