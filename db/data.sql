INSERT INTO protein (protein, price, descript, protein_img)
VALUES 
('null', 0.00, 'null', 'null'),
('chicken', 9.99, '7oz chicken breast', 'chicken.jpg'),
('lamb chops', 18.99, '3 lamb chops', 'lamb.jpg'),
('steak', 19.99, '16oz Ribeye', 'steak.jpg'),
('salmon', 15.99, '8oz pink salmon', 'salmon.jpg'),
('catfish', 13.99, '3 piece whole fried catfish', 'friedcatfish.jpg'),
('wings', 10.99, '10 piece wings, your choice of flavor', 'wings.jpg');

INSERT INTO side (side, price, descript, side_img)
VALUES 
('null', 0.00, 'null', 'null'),
('mashed potatoes', 2.99, 'creamy garlic butter mashed potatoes', 'mash.jpg'),
('mac & cheese', 4.99, '3 cheese mac & cheese with cavatopi corkscrew noodles', 'mac.jpg'),
('rice', 3.99, 'jasmine rice with lime & cilantro', 'rice.jpg');

INSERT INTO drink (drink, price, descript, drink_img)
VALUES
('null', 0.00, 'null', 'null'),
('lemonade', 2.99, 'freshly squeezed homemade lemonade', 'lemonade.jpg'),
('straeberry lemonade', 2.99, 'freshly squeezed homemade lemonade with strawberry puree', 'lemonadestraw.jpg')

INSERT INTO appetizer (app, price, descript, app_img)
VALUES
('null', 0.00, 'null', 'null'),
('spinach dip', 10.99, 'creamy 3 cheese spinach dip with pita chips', 'spinachdip.jpg'),
('egg rolls', 4.99, 'fried egg rolls with carrots, cabbage, & pork', 'eggroll.jpg'),

INSERT INTO dessert (dessert, price, descript, dessert_img)
VALUES
('null', 0.00, 'null', 'null'),
('pound cake', 3.99, 'slice of pound cake with lemon glaze', 'poundcake.jpg'),
('red velvet cupcakes', 5.99, '6 red velvet cupcakes with cream cheese icing', 'redcupcakes.jpg'),
('chocolate chip cookies', 3.00, '4 chocolate chip cookies', 'chocchip.jpg')

INSERT INTO seasoning (seasoning, ingredients)
VALUES
('null', 'null'),
('lemon pepper', 'lemon, peppercorn, salt'),
('blackened', 'smoked paprika, garlic, onion, black pepper, salt, dried basil, dried oregano, dried thyme'),
('cajun', 'paprika, garlic, onion, dried oregano, salt, black pepper, cayenne'),
('italian', 'dries basil, dried oregano, dried parsley, dried rosemary, dried thyme, red chili flakes, garlic'),
('carne asada', 'orange juice, lime juice, light beer, kikkoman soy sauce, vegetable oil, black pepper, onion'),
('sweet & smoky', 'brown sugar, black pepper, sea salt, dried basil, garlic, smoked paprika, lime zest'),
('buffalo', 'salt, black pepper, garlic, onion, paprika, cayenne'),
('bbq', 'brown sugar, paprika, garlic, chili powder, onion, cayenne, salt, black pepper')


INSERT INTO user (fName, lName, email, phone, username, password)
VALUES (
    'jarissa',
    'drummond',
    'jarissa415@gmail.com',
    '6018636496',
    'semiij415',
    'Password123!'
)
