import { Injectable } from '@nestjs/common';
// import { Tag } from './tag.model';

@Injectable()
export class TagService {
  findAll(): string[] {
    return ['dragons', 'coffee']
  }
  // private tags: Tag[] = [];

  // getAllTags(): Tag[] {
  //   return this.tags;
  // }

  // getTagById(id: number): Tag {
  //   return this.tags.find(tag => tag.id === id);
  // }

  // createTag(tag: Tag): Tag {
  //   const newTag: Tag = {
  //     id: this.tags.length + 1,
  //     name: tag.name,
  //   };
  //   this.tags.push(newTag);
  //   return newTag;
  // }

  // updateTag(id: number, updatedTag: Tag): Tag {
  //   const tagIndex = this.tags.findIndex(tag => tag.id === id);
  //   if (tagIndex !== -1) {
  //     this.tags[tagIndex] = {
  //       id,
  //       name: updatedTag.name,
  //     };
  //     return this.tags[tagIndex];
  //   }
  //   return null;
  // }

  // deleteTag(id: number): boolean {
  //   const tagIndex = this.tags.findIndex(tag => tag.id === id);
  //   if (tagIndex !== -1) {
  //     this.tags.splice(tagIndex, 1);
  //     return true;
  //   }
  //   return false;
  // }
}