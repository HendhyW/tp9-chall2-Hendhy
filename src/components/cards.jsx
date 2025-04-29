

export default function Cards() {
    const Response = {
        page: 1,
        results: [
            {
                userId: 1,
                id: 1,
                title:
                "sunt aut facere repellat provident occaecati excepturi optioreprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
                image: "https://picsum.photos/500",
            },
            {
                userId: 1,
                id: 2,
                title: "qui est esse",
                body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
                image: "https://picsum.photos/500",
            },
            {
            userId: 1,
            id: 3,
            title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
            image: "https://picsum.photos/500",
            },
            {
            userId: 1,
            id: 4,
            title: "eum et est occaecati",
            body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
            image: "https://picsum.photos/500",
            },
            {
            userId: 1,
            id: 5,
            title: "nesciunt quas odio",
            body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit aute sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
            image: "https://picsum.photos/500",
            },
        ],
    }

    return(
        <div className="w-screen flex-wrap justify-center gap-4 grid lg:grid-cols-3 pt-20 md:grid-cols-2 sm:grid-cols-1">
            {Response.results.map((result) => (
            <a
                key={result.id}
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
                <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    src={result.image}
                    alt={result.title}
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {result.title}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {result.body}
                    </p>
                </div>
            </a>
        ))}

        
        </div>
    )

}