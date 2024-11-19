module.exports = {
    client: 'pg',
    connection: {
      host: 'localhost',  // Or 'pg-docker' if you're using Docker
      user: 'postgres',
      password: 'your_new_password',  // Replace with the actual new password you set
      database: 'my_database',  // Your database name
    },
  };
  
