const express = require('express'),
	  expressGraphQL = require('express-graphql'),
	  schema = require('./schema/schema')

const app = express();

app.use('/graphql', expressGraphQL({
	schema,
	graphiql: true
}));

app.listen(4000, () => {
	console.log('server running')
})