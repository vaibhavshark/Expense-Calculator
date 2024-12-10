// const mongoose = require('mongoose');
// const url='mongodb://localhost/db'
// mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})

// const db = async () => {
//     try {
//         mongoose.set('strictQuery', true)
//         await mongoose.connect(process.env.MONGO_URL)
//         console.log('Db Connected')
//     } catch (error) {
//         console.log('DB Connection Error');
//     }
// }

// module.exports = {db}

const mongoose = require('mongoose');

const db = async () => {
    try {
        // Ensure strict query setting is applied
        mongoose.set('strictQuery', true);

        // Use the connection URL from environment variables
        const url = process.env.MONGO_URL || 'mongodb://localhost/db';
        
        // Connect to the MongoDB database
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        
        console.log('Db Connected');
    } catch (error) {
        console.error('DB Connection Error:', error);
    }
};

module.exports = { db };
