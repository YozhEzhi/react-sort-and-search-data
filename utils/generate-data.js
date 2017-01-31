/**
 * dreamjs - fake data generator - https://github.com/adleroliveira/dreamjs
 * jsonfile - module for writing json data to file - https://www.npmjs.com/package/jsonfile
 **/
const dream = require('dreamjs');
const jsonfile = require('jsonfile');

/**
 * path - output for generated file
 * amount - number of generated objects
 * phraseLength - number of words for phrase property
 * images - array of all available images
 **/
const config = {
  path: './public/data.json',
  amount: 50,
  phraseLength: 15,
  images: ['cat', 'dog', 'fox', 'koala', 'lion', 'owl', 'penguin', 'raccoon'],
};

dream.customType('user-image', helper => helper.oneOf(config.images));
dream.customType('user-phrase', helper => helper.chance.sentence({ words: config.phraseLength }));
dream.customType('incrementalId', helper => helper.previousItem ? helper.previousItem.id + 1 : 0);

dream.schema('user', {
  id: 'incrementalId',
  name: 'name',
  age: 'age',
  phone: 'phone',
  image: 'user-image',
  phrase: 'user-phrase',
});

dream.useSchema('user')
  .generateRnd(config.amount)
  .output((err, result) => {
    jsonfile.writeFile(config.path, result, () => {
      console.log(err || `Data was generated and placed to ${config.path}`);
    });
  });
