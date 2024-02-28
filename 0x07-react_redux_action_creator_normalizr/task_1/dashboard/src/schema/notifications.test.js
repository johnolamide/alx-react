const { normalize } = require('normalizr');
const { user, message, notification } = require('./notifications')
const getAllNotificationsByUser = require('./notifications');
const notificationData = require('../../notifications.json');

describe('getAllNotificationsByUser', () => {
  it("should return expected data for user with ID 5debd764a7c57c7839d722e9", () => {
    const userId = '5debd764a7c57c7839d722e9';
    const expectedData = [
      {
        guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
        isRead: true,
        type: "urgent",
        value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      },
      {
        guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
        isRead: false,
        type: "urgent",
        value: "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed",
      }
    ];
    const context = getAllNotificationsByUser(userId);

    expect(context).toEqual(expect.arrayContaining(expectedData));
  });
});

describe('Normalized Data Tests', () => {
    const data = {
        entities: {
            users: {
                '5debd764a7c57c7839d722e9': {
                    id: '5debd764a7c57c7839d722e9',
                    age: 25,
                    email: 'poole.sanders@holberton.nz',
                    name: { first: 'Poole', last: 'Sanders' },
                    picture: 'http://placehold.it/32x32',
                },
            },
            messages: {
                'efb6c485-00f7-4fdf-97cc-5e12d14d6c41': {
                    guid: 'efb6c485-00f7-4fdf-97cc-5e12d14d6c41',
                    isRead: false,
                    type: 'default',
                    value: 'Cursus risus at ultrices mi.',
                },
            },
            notifications: {
                '5debd7642e815cd350407777': {
                    author: '5debd764f8452ef92346c772',
                    context: '3068c575-d619-40af-bf12-dece1ee18dd3',
                    id: '5debd7642e815cd350407777',
                },
            },
        },
        result: '5debd7642e815cd350407777',
    };

    it('should have correct result array', () => {
        expect(data.result).toContain(
            '5debd76480edafc8af244228',
            '5debd764507712e7a1307303',
            '5debd76444dd4dafea89d53b',
        );
    });

    it('should have correct user entity', () => {
        const userIdToTest = '5debd764a7c57c7839d722e9';
        expect(data.entities.users[userIdToTest]).toEqual({
            id: userIdToTest,
            age: 25,
            email: 'poole.sanders@holberton.nz',
            name: { first: 'Poole', last: 'Sanders' },
            picture: 'http://placehold.it/32x32',
        });
    });

    it('should have correct message entity', () => {
        const messageIdToTest = 'efb6c485-00f7-4fdf-97cc-5e12d14d6c41';
        expect(data.entities.messages[messageIdToTest]).toEqual({
            guid: messageIdToTest,
            isRead: false,
            type: 'default',
            value: 'Cursus risus at ultrices mi.',
        });
    });

    it('should have correct notification entity', () => {
        const notificationIdToTest = '5debd7642e815cd350407777';
        expect(data.entities.notifications[notificationIdToTest]).toEqual({
            author: '5debd764f8452ef92346c772',
            context: '3068c575-d619-40af-bf12-dece1ee18dd3',
            id: notificationIdToTest,
        });
    });
});
