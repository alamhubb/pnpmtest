export default class TestUtil {
    static consolefad() {
        const modules = import.meta.glob('../../**/**.json', { eager: true })
        for (const moudle in modules) {
            console.log(moudle)
        }
        console.log(1111)
    }
}
