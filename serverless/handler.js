'use strict';

const emojis = [
  '🙂','😄','😃','😀','😊','😉','😍','🔶','🔷', '🚀'
];

module.exports.rank = async event => {
  const ranks = event.queryStringParameters.rank;
  const rankEmoji = emojis[ranks>= emojis.length ? emojis.length-1 : ranks ];
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Rank Generated',
        input: rankEmoji,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};


// sls config credentials --provider aws --key <> --secret <>
// sls deploy
// sls invoke --function rank
// sls invoke local --function rank