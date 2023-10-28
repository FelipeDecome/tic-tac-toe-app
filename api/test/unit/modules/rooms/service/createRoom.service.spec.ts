import { IRoomRepository } from '@modules/rooms/repository/interfaces/IRoom.repository';
import { CreateRoomService } from '@modules/rooms/service/createRoom.service';
import { Test } from '@nestjs/testing';
import { ICUIDService } from '@shared/cuid/interface/ICUID.service';

describe('CreateRoomService', () => {
  let service: CreateRoomService;
  let repository: IRoomRepository;
  let cuidService: ICUIDService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        CreateRoomService,
        {
          provide: IRoomRepository,
          useValue: {
            create: jest.fn(),
          },
        },
        {
          provide: ICUIDService,
          useValue: {
            generate: jest.fn(),
          },
        },
      ],
    }).compile();

    service = moduleRef.get(CreateRoomService);
    repository = moduleRef.get(IRoomRepository);
    cuidService = moduleRef.get(ICUIDService);
  });

  it('should create a room with the generated code', async () => {
    const code = '12345678';
    const generate = jest
      .spyOn(cuidService, 'generate')
      .mockImplementation(() => code);
    const create = jest
      .spyOn(repository, 'create')
      .mockImplementation(async ({ code }) => ({
        id: '1',
        code,
        createdAt: new Date(),
        updatedAt: new Date(),
      }));

    await service.execute();

    const room = await service.execute();

    expect(generate).toHaveBeenCalledWith({ length: 8 });
    expect(create).toHaveBeenCalledWith({ code });
    expect(room.code).toBe(code);
  });
});
