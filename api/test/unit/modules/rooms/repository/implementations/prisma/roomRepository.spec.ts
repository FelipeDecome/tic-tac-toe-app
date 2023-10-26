import { Test } from '@nestjs/testing';
import { RoomRepository } from '@modules/rooms/repository/implementations/prisma/roomRepository';
import { PrismaService } from '@shared/prisma/prismaService';

describe('CreateRoomService', () => {
  let service: RoomRepository;
  let prisma: PrismaService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        RoomRepository,
        {
          provide: PrismaService,
          useValue: {
            room: {
              create: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = moduleRef.get(RoomRepository);
    prisma = moduleRef.get(PrismaService);
  });

  describe('create', () => {
    it('should create a room', async () => {
      const roomCode = '123abc';

      const createSpy = jest.spyOn(prisma.room, 'create');

      await service.create({ code: roomCode });

      expect(createSpy).toHaveBeenCalledWith({
        data: {
          code: roomCode,
        },
      });
    });
  });
});
