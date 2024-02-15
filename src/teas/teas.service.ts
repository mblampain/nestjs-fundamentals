import { Injectable, NotFoundException } from '@nestjs/common';
import { Tea } from './entities/tea.entity';
import { CreateTeaDto } from './dto/create-tea.dto';
import { UpdateTeaDto } from './dto/update-tea.dto';

@Injectable()
export class TeasService {
  private teas: Tea[] = [
    {
      id: 1,
      name: 'Yolo',
      brand: 'Swag',
      flavors: ['yay', 'yep'],
    },
  ];

  public findAll(): Tea[] {
    return this.teas;
  }

  public findOne(id: string): Tea {
    const tea = this.teas.find((tea) => tea.id === +id);
    if (!tea) {
      throw new NotFoundException(`Tea #${id} not found`);
    }
    return tea;
  }

  public create(createTeaDTO: CreateTeaDto) {
    const newTea: Tea = { ...createTeaDTO, id: this.teas.length + 1 };
    this.teas.push(newTea);
    return createTeaDTO;
  }

  public update(id: string, updatedContent: UpdateTeaDto): Tea {
    this.teas = this.teas.map((tea) => {
      if (tea.id === +id) {
        return {
          ...tea,
          ...updatedContent,
        };
      }
      return tea;
    });

    return this.findOne(id);
  }

  public remove(id: string): void {
    this.teas = this.teas.filter((tea) => tea.id !== +id);
  }
}
