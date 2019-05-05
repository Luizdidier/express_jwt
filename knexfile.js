module.exports = {
    development: {
      client: 'pg',
      connection: {
        host : 'localhost',
        user : 'postgres',
        password : 's3cr3t',
        database : 'backend-vap',
        charset: 'utf8'
      },
      debug: true
    },
  
    test: {
      client: 'pg',
      connection: {
        host : 'localhost',
        user : 'postgres',
        password : 's3cr3t',
        database : 'backend-vap',
        charset: 'utf8'
      },
      useNullAsDefault: true
    },
  
    production: {
      client: 'pg',
      connection: {
        host : 'ec2-23-23-92-204.compute-1.amazonaws.com',
        user : 'nyywqsbwzmsrag',
        password : '658ed4751953475571e9d086edc3d52feb25429943a0fc9811ebebfafeb1941b',
        database : 'd1abhlclg3jf3v',
        charset: 'utf8'
      },
      useNullAsDefault: true
    }
  }

  // dbname=d1abhlclg3jf3v host=ec2-23-23-92-204.compute-1.amazonaws.com port=5432 user=nyywqsbwzmsrag password=658ed4751953475571e9d086edc3d52feb25429943a0fc9811ebebfafeb1941b sslmode=require