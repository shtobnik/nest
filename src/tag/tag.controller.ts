import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
// import { CreateTagDto, UpdateTagDto } from './dto/tag.dto';
import { TagService } from './tag.service';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  findAll(): string[] {
    return this.tagService.findAll();
  }

  // @Get(':id')
  // getTagById(@Param('id') id: string) {
  //   return this.tagService.getTagById(id);
  // }

  // @Post()
  // createTag(@Body() createTagDto: CreateTagDto) {
  //   return this.tagService.createTag(createTagDto);
  // }

  // @Put(':id')
  // updateTag(@Param('id') id: string, @Body() updateTagDto: UpdateTagDto) {
  //   return this.tagService.updateTag(id, updateTagDto);
  // }

  // @Delete(':id')
  // deleteTag(@Param('id') id: string) {
  //   return this.tagService.deleteTag(id);
  // }
}