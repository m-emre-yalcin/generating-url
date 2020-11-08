const url = require('../index.js')

test('generate url with query', () => {
    let path = url.generate({
        baseUrl: 'localhost:1337',
        path: 'sections',
        query: {
            _start: 0,
            _limit: 20,
            _where: {
                id_eq: 5
            },
            _sort: 'id:DESC'
        },
    })
    expect(path).not.toBe(false)

    console.log(expect.getState().currentTestName, ':', path)
})

test('try to generate without path', () => {
    let path = url.generate({
        query: {
            _start: 0,
            _limit: 20,
            _where: {
                id_eq: 5
            },
            _sort: 'id:DESC'
        },
    })
    expect(path).toBe(false)

    console.log(expect.getState().currentTestName, ':', path)
})

test('generate url without query', () => {
    let path = url.generate({
        path: 'sections',
        query: false,
    })
    expect(path).not.toBe(false)

    console.log(expect.getState().currentTestName, ':', path)
})

test('generate url default query', () => {
    let path = url.generate({
        path: 'sections',
    })
    expect(path).not.toBe(false)

    console.log(expect.getState().currentTestName, ':', path)
})

test('generate url 1', () => {
    let path = url.generate({
        path: 'sections.count',
        query: false,
    })
    expect(path).not.toBe(false)

    console.log(expect.getState().currentTestName, ':', path)
})

test('generate url 2', () => {
    let id = 1
    let path = url.generate({
        path: `sections.count.${id}`,
        query: false,
    })
    expect(path).not.toBe(false)

    console.log(expect.getState().currentTestName, ':', path)
})

test('generate url 3', () => {
    let path = url.generate({
        path: 'sections/count/1',
        query: false,
    })
    expect(path).not.toBe(false)

    console.log(expect.getState().currentTestName, ':', path)
})

test('generate url 4', () => {
    let path = url.generate({
        path: 'sections/count/1',
        query: false,
    })
    expect(path).not.toBe(false)

    console.log(expect.getState().currentTestName, ':', path)
})

test('generate url with parameters and default query', () => {
    let path = url.generate({
        path: 'sections/:id',
        params: {
            id: 1
        },
    })
    expect(path).not.toBe(false)

    console.log(expect.getState().currentTestName, ':', path)
})

test('generate url with parameters and query', () => {
    let path = url.generate({
        path: 'sections/:sectionId/task/:taskId',
        params: {
            sectionId: 1,
            taskId: 2
        },
        query: {
            _start: 0,
            _limit: 20,
            _where: {
                id_eq: 5
            },
            _sort: 'id:DESC'
        },
    })
    expect(path).not.toBe(false)

    console.log(expect.getState().currentTestName, ':', path)
})