// console.log(
//   JSON.stringify(
//     new User("Gogi",
//       "Doe",
//       "gogiDoe@gogi.go",
//       "+994508887754")
//   ),
//   JSON.stringify(
//     new User("John",
//       "Sertoful",
//       "j.ser@s.out",
//       "+994186698245")
//   ),
//   JSON.stringify(
//     new User("Milla",
//       "Yo",
//       "yomilla888@bob.ob",
//       "+99441744220")
//   ),
//   JSON.stringify(
//     new User("Oleg",
//       "Jackson",
//       "ockson@hola.go",
//       "+9948594741")
//   )
// );

console.log(
  JSON.stringify(
    new Post("Post - 1",
      1111,
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut incidunt laboriosam, magnam odio omnis provident ratione voluptatum. Accusantium alias architecto at commodi, culpa doloremque dolores dolorum eius enim eum ex facilis hic inventore iusto laboriosam minus natus necessitatibus nesciunt nobis placeat quae quas quibusdam quos saepe soluta tempore temporibus. Aliquam.',
      '02-03-2020')
  ) + '\n',
  JSON.stringify(
    new Post("Post - 12",
      1111,
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut incidunt laboriosam, magnam odio omnis provident ratione voluptatum. Accusantium alias architecto at commodi, culpa doloremque dolores dolorum eius enim eum ex facilis hic inventore iusto laboriosam minus natus necessitatibus nesciunt nobis placeat quae quas quibusdam quos saepe soluta tempore temporibus. Aliquam.',
      '02-03-2020')
  ) + '\n',
  JSON.stringify(
    new Post("Post - 32",
      1112,
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut incidunt laboriosam, magnam odio omnis provident ratione voluptatum. Accusantium alias architecto at commodi, culpa doloremque dolores dolorum eius enim eum ex facilis hic inventore iusto laboriosam minus natus necessitatibus nesciunt nobis placeat quae quas quibusdam quos saepe soluta tempore temporibus. Aliquam.',
      '07-13-2020')
  ) + '\n',
  JSON.stringify(
    new Post("Post - 100",
      1113,
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut incidunt laboriosam, magnam odio omnis provident ratione voluptatum. Accusantium alias architecto at commodi, culpa doloremque dolores dolorum eius enim eum ex facilis hic inventore iusto laboriosam minus natus necessitatibus nesciunt nobis placeat quae quas quibusdam quos saepe soluta tempore temporibus. Aliquam.',
      '12-03-2020')
  ) + '\n',
  JSON.stringify(
    new Post("Post - 01",
      1113,
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut incidunt laboriosam, magnam odio omnis provident ratione voluptatum. Accusantium alias architecto at commodi, culpa doloremque dolores dolorum eius enim eum ex facilis hic inventore iusto laboriosam minus natus necessitatibus nesciunt nobis placeat quae quas quibusdam quos saepe soluta tempore temporibus. Aliquam.',
      '03-09-2019')
  ) + '\n',
  JSON.stringify(
    new Post("Post - 18",
      1112,
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut incidunt laboriosam, magnam odio omnis provident ratione voluptatum. Accusantium alias architecto at commodi, culpa doloremque dolores dolorum eius enim eum ex facilis hic inventore iusto laboriosam minus natus necessitatibus nesciunt nobis placeat quae quas quibusdam quos saepe soluta tempore temporibus. Aliquam.',
      '05-15-2020')
  ) + '\n'
)

console.log(
  JSON.stringify(
    new PostComment(
      1122,
      '02-18-2020',
      1111,
      'Hello!'
    )
  ) + '\n',
  JSON.stringify(
    new PostComment(
      1122,
      '02-18-2020',
      1112,
      'We are happy for you!'
    )
  ) + '\n',
  JSON.stringify(
    new PostComment(
      1123,
      '03-01-2020',
      1111,
      'You should delete this post! NOW!!'
    )
  ) + '\n',
  JSON.stringify(
    new PostComment(
      1125,
      '02-18-2020',
      1114,
      'hm...okay'
    )
  ) + '\n',
  JSON.stringify(
    new PostComment(
      1123,
      '02-18-2020',
      1112,
      'Not at all'
    )
  ) + '\n',
);