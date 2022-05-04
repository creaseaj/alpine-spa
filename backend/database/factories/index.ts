// import Factory from '@ioc:Adonis/Lucid/Factory'
import User from 'App/Models/User'
import Factory from '@ioc:Adonis/Lucid/Factory'

export const UserFactory = Factory
    .define(User, ({ faker }) => {
        return {
            email: faker.internet.email(),
            password: 'password',
        }
    })
    .build()