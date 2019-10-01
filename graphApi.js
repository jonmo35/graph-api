var FB = require("fb");

var accessToken = 'EAAP6kQjOMsMBALgHMxZCbRFQbcV7KLhcHkVXMQvOp8ZCZAXSzZBeg1QZBdBCCzySVFMqyMG5TSqpCtmzWOGiYgqV8qpV33nDxM3ZADT3kdEcHHZApbnZCNkV3ZBSFUou9rCeQitBvsMJ2Qv2fG72xO2ARtqn2BzxEIWqfViSF0nONiS4rAOCEp6syKXk4fgC7ZCtouhnBtWZCkdAN2mL3KbzxhHM3z7RMSYoFUAgjGdfHXIdVpZAOsUFcAkE'

initialization = function () {

    FB.init({
        appId: '1119925755065027',
        status: true,
        xfbml: true,
        version: 'v4.0'

    });
}

getUserAccount = function () {
    FB.api('/104239897651130', 'GET', { "fields": "name,birthday", "access_token": accessToken }, function (response) {
        name = response.name
        birthday = response.birthday
        openStatement= 'Hi my name is ' + name + " and was born on " + birthday
        console.log(openStatement)
        return openStatement
    });
}

getPermissions = function (permission, status) {
    FB.api('104239897651130/permissions', 'GET', { 'access_token': accessToken }, function (response) {
        status = response.data[0].status
        permission = response.data[0].permission
        console.log('User Birthdate is enabled as show within permissions api ->> '+ permission + ' ' + status + '\n')

        return permission,status
        // return
    });
}


deletePermissions = function () {
    FB.api('104239897651130/permissions/user_birthday', 'DELETE', { 'access_token': accessToken }, function (response) {
      if (response.success == true)
      {
          birthday=getUserAccount()
          console.log('The birthday should not parse in string and show up as \'undefined\' '+ birthday)        
     }
    });


}

main = function(){
    getUserAccount()
    getPermissions()
    deletePermissions()
}


main()


