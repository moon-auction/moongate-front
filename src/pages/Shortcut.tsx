import React, { useEffect, useState } from "react";
import styles from '@styles/Shortcut.module.css';
import json from '@misc/shortcuts.json';

class Link {
    name: string;
    url: string;
    tags: string[];
    description: string;
    constructor(name: string, path: string, tags: string[], description: string) {
        this.name = name;
        this.url = path;
        this.tags = tags;
        this.description = description;
    }
}

export default function Shortcut() {
    const [links, setLinks] = useState<Link[]>([]);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    useEffect(() => {
        setLinks(json.shortcuts.map((link: any) => new Link(link.name, link.url, link.tags, link.description)));
    }, []);

    useEffect(() => {
        if (selectedTags.length === 0) {
            setLinks(json.shortcuts.map((link: any) => new Link(link.name, link.url, link.tags, link.description)));
        } else {
            setLinks(json.shortcuts.map((link: any) => new Link(link.name, link.url, link.tags, link.description)).filter((link: Link) => {
                for (var i = 0; i < selectedTags.length; i++) {
                    if (!link.tags.includes(selectedTags[i])) {
                        return false;
                    }
                }
                return true;
            }));
        }
    }, [selectedTags]);

    function handleTagClick(e: any) {
        var tag = e.target.value;
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((t) => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    }


    return(
        <div>
            <div className={styles.container}>
                <input type="text" placeholder="Search" onChange={handleTagClick} className={styles.search}/>
                <div className={styles.tagSelector}>
                    {json.tags.map((tag: string) => <button value={tag} onClick={handleTagClick} className={selectedTags.includes(tag) ? styles.selectedTag : styles.tag}>#{tag}</button>)}
                </div>
                <div className={styles.sites}>
                {
                //add onClick to tags
                links.map((link: Link) => {
                    return (
                        <div className={styles.links}>
                            <a href={link.url}>{link.name}</a>
                            <div className={styles.tags}>
                                {link.tags.map((tag) => <button value={tag} onClick={handleTagClick} className={selectedTags.includes(tag) ? styles.selectedTag : styles.tag}>#{tag}</button>)}
                            </div>
                            <div>{link.description}</div>
                        </div>
                    )
                })
                }
                </div>
            </div>
        </div>
    );
}