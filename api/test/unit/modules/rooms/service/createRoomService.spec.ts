import { CreateRoomService } from '@modules/rooms/service/createRoomService';
import { IRoomRepository } from '@modules/rooms/repository/interfaces/IRoomRepository';
import { Test } from '@nestjs/testing';

describe('CreateRoomService', () => {
  let service: CreateRoomService;
  let repository: IRoomRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        CreateRoomService,
        {
          provide: IRoomRepository,
          useValue: {
            create: jest.fn().mockImplementation(() => ({
              id: '1',
              code: '123456',
            })),
          },
        },
      ],
    }).compile();

    service = moduleRef.get(CreateRoomService);
    repository = moduleRef.get(IRoomRepository);
  });

  it('should create a room', async () => {
    const create = jest.spyOn(repository, 'create');

    await service.execute();

    expect(create).toBeCalledTimes(1);
  });
});
