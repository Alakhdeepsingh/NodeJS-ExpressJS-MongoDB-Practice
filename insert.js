const dbConnect = require('./mongodb'); // Update the path to match the location of the 'mongodb.js' file

const insert = async () => {
  try {
    const collection = await dbConnect(); // Use 'collection' instead of 'db'
    const result = await collection.insertOne({
      name: 'note5',
      brand: 'vivo',
      price: 320,
      category: 'mobile',
    });
    console.log(result);
  } catch (error) {
    console.error('Error inserting data:', error);
  }
};

insert();
