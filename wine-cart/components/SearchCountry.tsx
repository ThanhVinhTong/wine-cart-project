"use client"

import { useState, Fragment } from 'react'
import { SearchCountryProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'
import { countries } from '@/constants'

const SearchCountry = ({ country, setCountry }: SearchCountryProps) => {
    const [query, setQuery] = useState('')

    const filteredCountries = 
        query === "" ? countries : countries.filter((item) => (
            item.toLowerCase()
            .replace(/\s+./g, "")
            .includes(query.toLowerCase().replace(/\s+./g, ""))
        ))

    return (
        <div className='search-country'>
            <Combobox value={country} onChange={setCountry}>
                <div className='relative w-full'>
                    <Combobox.Button className="absolute top-[14px]">
                        <Image 
                            src="wine-logo.svg"
                            width={20}
                            height={20}
                            className="ml-4"
                            alt="Wine Logo"
                        />
                    </Combobox.Button>

                    <Combobox.Input
                        className="search-country__input"
                        placeholder='Italy'
                        displayValue={(country: string) => country}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                    <Transition 
                        as={Fragment} 
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={() => setQuery('')}    
                    >
                        <Combobox.Options>
                            {filteredCountries.map((item) => (
                                    <Combobox.Option
                                        key={item}
                                        className={({active}) => `
                                        relative search-country__option
                                        ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}
                                        `}
                                        value={item}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                    {item}
                                                </span>
                                                {selected ? (
                                                    <span 
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3
                                                        ${active ? 'text-white' : 'text-teal-600'}`}
                                                    >
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                )
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchCountry