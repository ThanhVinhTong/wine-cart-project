"use client"

import { useState } from "react"
import { SearchCountry } from "./"
import Image from "next/image"
import { model } from "mongoose"
import { useRouter } from "next/navigation"

const SearchButton = ({ otherClasses }: { otherClasses:string }) => (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
        <Image 
            src='/magnifying-glass.svg'
            alt='magnifying glass'
            width={40}
            height={40}
            className='object-contain'
        />
    </button>
)
const SearchBar = () => {
    const [country, setCountry] = useState('');
    const [producer, setProducer] = useState('');
    const router = useRouter();

    const handleSearch = (e: React.
        FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            if(country === '' && producer === '') {
                return alert('Fill in the search bar, we are not your soulmate to correctly guess what you want!');
            }

            updateSearchParams(country.toLowerCase(), producer.toLowerCase())
        }

    const updateSearchParams = (country: string, producer: string) => {
        const searchParams = new URLSearchParams(window.location.search);

        if (producer) {
            searchParams.set('producer', producer)
        } else {
            searchParams.delete('producer')
        }

        if (country) {
            searchParams.set('country', country)
        } else {
            searchParams.delete('country')
        }

        const newPathname = `${window.location.pathname}?${searchParams.toString()}`
    
        router.push(newPathname)
    }

    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchCountry
                    country={country}
                    setCountry={setCountry}
                />
                <SearchButton otherClasses="sm:hidden" />
            </div>
            <div className="searchbar__item">
                <Image
                    src='/producer.png'
                    width={25}
                    height={25}
                    className="absolute w-[20px] h-[20px] ml-4"
                    alt="producer"
                />
                <input 
                    type="text"
                    name="producer"
                    value={producer}
                    onChange={(e) => setProducer(e.target.value)}
                    placeholder="Bottega"
                    className="searchbar__input"
                />
                <SearchButton otherClasses="sm:hidden" />
            </div>
            <SearchButton otherClasses="max-sm:hidden" />
        </form>
    )
}

export default SearchBar