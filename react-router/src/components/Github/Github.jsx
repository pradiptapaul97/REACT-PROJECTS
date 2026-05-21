import { useEffect,useState } from "react";
import { useLoaderData } from "react-router";

export default function Github() {

    const followers = useLoaderData().followers;

    // const [followers, setFollowers] = useState(0);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/pradiptapaul97')
    //         .then(res => res.json())
    //         .then(data => setFollowers(data.followers))
    // }, [])

    return (
        <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="p-6 bg-gray-100 sm:rounded-lg text-center">
                        <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                            Github Profile
                        </h1>
                        <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                            Github Followers: <span className="text-orange-700 font-bold">{followers}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getGithubData() {
    return await fetch('https://api.github.com/users/pradiptapaul97').then(res => res.json());
}
