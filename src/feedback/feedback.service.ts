import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Feedback } from './entities/feedback.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FeedbackService {
  constructor( @InjectRepository(Feedback)
  private readonly feedbackRepository:Repository<Feedback>
  ){}

   async create(createTestimonyDto:CreateFeedbackDto) { 
   const testimony = await this.feedbackRepository.create(createTestimonyDto)
    return this.feedbackRepository.save(testimony);
  }

  findAll() {
    return this.feedbackRepository.find();
  }

  findOne(id) {
    const feedback =  this.feedbackRepository.findOne({where: {id}});
    if(!feedback){
      throw new NotFoundException(`Feedback with the given #${id} not found`);
    }
    return feedback;
  }

  async update(id: string, updateTestimonyDto: UpdateFeedbackDto) {
    const existingTestimony= await this.feedbackRepository.preload({
      id:+id,
      ...updateTestimonyDto,
      //flavors,
    });
    if(!existingTestimony){
      throw new NotFoundException(`The Feedback with the given ${id} not found`);
    }
    return this.feedbackRepository.save(existingTestimony);
  }

  async remove(id:string) {
    const testimony = await this.findOne(id);
    return this.feedbackRepository.remove(testimony);
  }
}
