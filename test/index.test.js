import index from '../index.js'

test('generate url with query', () => {
    let url = index.generateUrl({
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
    expect(url).not.toBe(false)

    console.log(expect.getState().currentTestName, ':', url)
})

test('generate url without query', () => {
    let url = index.generateUrl({
        path: 'sections',
        query: false,
    })
    expect(url).not.toBe(false)

    console.log(expect.getState().currentTestName, ':', url)
})

test('generate url default query', () => {
    let url = index.generateUrl({
        path: 'sections',
    })
    expect(url).not.toBe(false)

    console.log(expect.getState().currentTestName, ':', url)
})

test('generate url 1', () => {
    let url = index.generateUrl({
        path: 'sections.count',
        query: false,
    })
    expect(url).not.toBe(false)

    console.log(expect.getState().currentTestName, ':', url)
})

test('generate url 2', () => {
    let id = 1
    let url = index.generateUrl({
        path: `sections.count.${id}`,
        query: false,
    })
    expect(url).not.toBe(false)

    console.log(expect.getState().currentTestName, ':', url)
})

test('generate url 3', () => {
    let url = index.generateUrl({
        path: 'sections/count/1',
        query: false,
    })
    expect(url).not.toBe(false)

    console.log(expect.getState().currentTestName, ':', url)
})

test('generate url 4', () => {
    let url = index.generateUrl({
        path: 'sections/count/1',
        query: false,
    })
    expect(url).not.toBe(false)

    console.log(expect.getState().currentTestName, ':', url)
})

test('generate url with parameters and default query', () => {
    let url = index.generateUrl({
        path: 'sections/:id',
        params: {
            id: 1
        },
    })
    expect(url).not.toBe(false)

    console.log(expect.getState().currentTestName, ':', url)
})

test('generate url with parameters and query', () => {
    let url = index.generateUrl({
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
    expect(url).not.toBe(false)

    console.log(expect.getState().currentTestName, ':', url)
})