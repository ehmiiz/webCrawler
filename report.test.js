const { sortPages } = require('./report.js')
const {test, expect} = require('@jest/globals')

test('sortPages 2 pages', () => {
    const input = {
        'https://ehmiiz.se/path': 1,
        'https://ehmiiz.se': 3
    }

    const actual = sortPages(input)
    const expected = [
        ['https://ehmiiz.se', 3],
        ['https://ehmiiz.se/path', 1]
        
    ]
    expect(actual).toEqual(expected)
})

test('sortPages 5 pages', () => {
    const input = {
        'https://ehmiiz.se/path': 1,
        'https://ehmiiz.se': 4,
        'https://ehmiiz.se/path1': 3,
        'https://ehmiiz.se/path2': 5,
        'https://ehmiiz.se/path3': 2,
    }

    const actual = sortPages(input)
    const expected = [
        ['https://ehmiiz.se/path2', 5],
        ['https://ehmiiz.se', 4],
        ['https://ehmiiz.se/path1', 3],
        ['https://ehmiiz.se/path3', 2],
        ['https://ehmiiz.se/path', 1],
        
    ]
    expect(actual).toEqual(expected)
})