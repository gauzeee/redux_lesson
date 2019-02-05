export default class Loader {

    async getRequest() {
        let request = await fetch('http://localhost:3001/numbers');
        return await request.json();
    }

    getConstFromDb = async () => {
        const randomId = Math.floor((Math.random() * 3) + 1);
        const result = await this.getRequest();
        return parseInt(result[randomId - 1]["const"])
    };

    async uploadConst(value) {
        const curValue = value;
        await fetch("http://localhost:3001/numbers",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({"const": curValue})
            })
            .then(function (res) {
                alert(`New number ${curValue} has been added to DB`)
            })
            .catch(function (res) {
                console.log(res)
            })
    }
}